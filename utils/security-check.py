#!/usr/bin/env python3
"""
Script de verificación de seguridad para el repositorio
Busca credenciales y información sensible expuesta
"""

import os
import re
import sys
from pathlib import Path

# Patrones de búsqueda para información sensible
PATTERNS = {
    'passwords': [
        r'(?i)password\s*=\s*["\'].*["\']',
        r'(?i)passwd\s*=\s*["\'].*["\']',
        r'(?i)pwd\s*=\s*["\'].*["\']',
        r'(?i)pass\s*=\s*["\'].*["\']'
    ],
    'api_keys': [
        r'(?i)api[_-]?key\s*=\s*["\'].*["\']',
        r'(?i)apikey\s*=\s*["\'].*["\']',
        r'(?i)secret[_-]?key\s*=\s*["\'].*["\']',
        r'(?i)access[_-]?token\s*=\s*["\'].*["\']'
    ],
    'database': [
        r'(?i)db[_-]?user\s*=\s*["\'].*["\']',
        r'(?i)db[_-]?password\s*=\s*["\'].*["\']',
        r'(?i)database[_-]?url\s*=\s*["\'].*["\']',
        r'jdbc:.*://.*:.*@',
        r'mongodb\+srv://.*:.*@'
    ],
    'private_keys': [
        r'-----BEGIN RSA PRIVATE KEY-----',
        r'-----BEGIN PRIVATE KEY-----',
        r'-----BEGIN EC PRIVATE KEY-----'
    ]
}

# Extensiones de archivo a verificar
FILE_EXTENSIONS = [
    '.py', '.js', '.ts', '.java', '.properties',
    '.yml', '.yaml', '.json', '.xml', '.config',
    '.env', '.ini', '.conf', '.cfg'
]

# Directorios a ignorar
IGNORE_DIRS = [
    '.git', 'node_modules', 'venv', '.venv',
    '__pycache__', 'build', 'dist', 'target',
    '.idea', '.vscode'
]

def should_check_file(file_path):
    """Determina si un archivo debe ser verificado"""
    path = Path(file_path)

    # Ignorar archivos en directorios excluidos
    for parent in path.parents:
        if parent.name in IGNORE_DIRS:
            return False

    # Verificar extensión
    return path.suffix in FILE_EXTENSIONS

def check_file(file_path):
    """Verifica un archivo en busca de información sensible"""
    issues = []

    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            lines = content.split('\n')

            for category, patterns in PATTERNS.items():
                for pattern in patterns:
                    for i, line in enumerate(lines, 1):
                        if re.search(pattern, line):
                            # Ignorar si es una variable de entorno
                            if 'process.env' in line or 'System.getenv' in line or '${' in line:
                                continue
                            # Ignorar comentarios
                            if line.strip().startswith('#') or line.strip().startswith('//'):
                                continue

                            issues.append({
                                'file': file_path,
                                'line': i,
                                'category': category,
                                'content': line.strip()[:100]  # Limitar longitud
                            })
    except Exception as e:
        print(f"Error al leer {file_path}: {e}")

    return issues

def scan_repository(root_path='.'):
    """Escanea todo el repositorio"""
    all_issues = []
    files_checked = 0

    for root, dirs, files in os.walk(root_path):
        # Filtrar directorios a ignorar
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        for file in files:
            file_path = os.path.join(root, file)
            if should_check_file(file_path):
                files_checked += 1
                issues = check_file(file_path)
                all_issues.extend(issues)

    return all_issues, files_checked

def main():
    print("Iniciando verificacion de seguridad...")
    print("-" * 50)

    # Escanear repositorio
    issues, files_checked = scan_repository()

    print(f"Archivos verificados: {files_checked}")

    if not issues:
        print("No se encontraron problemas de seguridad!")
        return 0

    # Mostrar problemas encontrados
    print(f"\nSe encontraron {len(issues)} posibles problemas:\n")

    for issue in issues:
        print(f"Archivo: {issue['file']}")
        print(f"   Linea {issue['line']}: {issue['category']}")
        print(f"   Contenido: {issue['content']}")
        print()

    print("-" * 50)
    print("IMPORTANTE: Revisa estos archivos y considera usar variables de entorno")
    print("Consulta .env.example para ver como configurar las variables")

    return 1

if __name__ == "__main__":
    sys.exit(main())