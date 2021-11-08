create table fruitbasket(      
    id serial not null primary key,
    type text not null,
    qty int not null,
    price decimal(13,2) not null
);
insert into fruitbasket (type,qty,price) values ('Mango', 1, 10.00);
insert into fruitbasket (type,qty,price) values ('Pineapple', 2, 15.00);
insert into fruitbasket (type,qty,price) values ('Naartjie', 1, 1.50);
insert into fruitbasket (type,qty,price) values ('Banana', 1, 4.00);
insert into fruitbasket (type,qty,price) values ('Orange', 1, 2.50);



