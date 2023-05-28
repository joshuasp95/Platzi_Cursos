import os


def eliminar_archivos(directorio, extensiones):
    for root, dirs, files in os.walk(directorio):
        for file in files:
            nombre, extension = os.path.splitext(file)
            if extension.lower() in extensiones:
                archivo_path = os.path.join(root, file)
                os.remove(archivo_path)
                print(f"Archivo eliminado: {archivo_path}")


if __name__ == "__main__":
    # Reemplaza con la ruta al directorio base
    directorio_base = "/home/theguardian/GIT/Platzi"
    extensiones_eliminar = [".jpg", ".pdf"]

    eliminar_archivos(directorio_base, extensiones_eliminar)
