CREATE TABLE IF NOT EXISTS test_table (
    id INT,
    fecha DATE,
    name VARCHAR(10) NOT NULL
);
alter table test_table
ADD PRIMARY KEY (id);
alter table test_table
modify id bigint(20) NOT NULL auto_increment;