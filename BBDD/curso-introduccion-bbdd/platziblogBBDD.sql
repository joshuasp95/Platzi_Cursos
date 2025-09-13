create database platziblog;

use platziblog;

create table categorias(
	id int not null auto_increment primary key,
    nom_categoria varchar(30) not null
);


create table etiquetas(
id int not null auto_increment primary key,
nom_etiqueta varchar(30) not null
);

create table usuarios(
id int not null auto_increment primary key,
login varchar(30) not null,
password varchar (40) not null,
nickname varchar (40) not null,
email varchar (50) unique not null
);

create table posts(
id int primary key not null auto_increment,
titulo varchar (100) not null,
fecha_pub timestamp,
contenido text not null,
estatus char(8) default 'activo',

/*llaves foraneas*/
usuario_id int not null,
categoria_id int not null,
/*relaciones*/
constraint fk_posts_usuario foreign key (usuario_id) references usuarios(id),
constraint fk_posts_categoria foreign key (categoria_id) references categorias(id)

);

create table comentarios(
id int primary key not null auto_increment,
cuerpo_comentario text not null,
/*llaves foraneas*/
usuario_id int not null,
/*relaciones*/
constraint fk_comentarios_usuario foreign key (usuario_id) references usuarios(id)
);

alter table comentarios add column posts_id int not null;

alter table comentarios add constraint fk_comentarios_post foreign key (posts_id) references posts(id);

/*tabla transitiva*/
create table posts_etiquetas(
id int not null auto_increment primary key,
post_id int not null,
etiqueta_id int not null,

constraint fk_postEtiquetas_posts foreign key (post_id) references posts(id),
constraint fk_postEtiquetas_etiquetas foreign key (etiqueta_id) references etiquetas(id)
);