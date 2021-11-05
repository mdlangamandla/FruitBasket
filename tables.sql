create table fruitBacket(      
    id serial not null primary key,
    type text not null,
    qty int not null,
    price decimal(13,2) not null
);
insert into fruitbacket (type,qty,price) values ('Mango', 1, 10.00);
insert into fruitbacket (type,qty,price) values ('Pineapple', 1, 15.00);
insert into fruitbacket (type,qty,price) values ('Naartjie', 1, 1.50);
insert into fruitbacket (type,qty,price) values ('Banana', 2, 4.00);
insert into fruitbacket (type,qty,price) values ('Orange', 1, 2.50);



