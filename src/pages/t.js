CREATE DATABASE ShipMate;
USE ShipMate;
-- drop database group4;
CREATE TABLE Customer (
    CustomerID VARCHAR(6) CHECK(CustomerID LIKE 'C%') PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    street VARCHAR(20) NOT NULL,
    Address VARCHAR(100) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    BillingMethod VARCHAR(255) NOT NULL
);

CREATE TABLE Account (
    AccountID INT PRIMARY KEY,
    AccountNumber VARCHAR(20) NOT NULL,
    CustomerID VARCHAR(6) CHECK(CustomerID  LIKE 'C%') NOT NULL ,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID) on delete cascade
);

CREATE TABLE CreditCard (
    CardNumber BIGINT PRIMARY KEY,
    CustomerID VARCHAR(6) CHECK(CustomerID  LIKE 'C%') NOT NULL,
    ExpirationDate DATE NOT NULL,
    SecurityCode INT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID) on delete cascade
);

CREATE TABLE Employee (
    EmployeeID VARCHAR(6) CHECK(EmployeeID  LIKE 'E%') PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Role VARCHAR(255) NOT NULL
);

CREATE TABLE Warehouse (
    WarehouseID VARCHAR(6) CHECK(WarehouseID LIKE 'W%') PRIMARY KEY,
    Address VARCHAR(255) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    Email VARCHAR(255) NOT NULL
);

CREATE TABLE Truck (
    TruckID VARCHAR(6) CHECK(TruckID LIKE 'T%') PRIMARY KEY,
    PlateNumber VARCHAR(20) NOT NULL,
    Capacity DECIMAL(10,2) NOT NULL,
    EmployeeID VARCHAR(6) ,
    WarehouseID VARCHAR(6) ,
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID) on delete set null , 
    FOREIGN KEY (WarehouseID) REFERENCES Warehouse(WarehouseID) on delete set null 
);

CREATE TABLE Plane (
    PlaneID VARCHAR(6) CHECK(PlaneID LIKE 'Pl%') PRIMARY KEY,
    TailNumber VARCHAR(20) NOT NULL,
    Capacity DECIMAL(10,2) NOT NULL,
    EmployeeID VARCHAR(6) ,
    WarehouseID VARCHAR(6) ,
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID) on delete set null,
    FOREIGN KEY (WarehouseID) REFERENCES Warehouse(WarehouseID) on delete set null
);

CREATE TABLE Package (
    PackageID VARCHAR(6) CHECK(PackageID LIKE 'P%'),
    Type VARCHAR(255) NOT NULL,
    Weight DECIMAL(10,2) NOT NULL,
    DeliveryTime DATETIME NOT NULL,
    Status VARCHAR(255) NOT NULL,
    AccountID INT,
    CreditCardNumber BIGINT,
    EmployeeID VARCHAR(6) ,
    TruckID VARCHAR(6) ,
    PlaneID VARCHAR(6) ,
    WarehouseID VARCHAR(6) ,
    PRIMARY KEY(PackageID),
    FOREIGN KEY (AccountID) REFERENCES Account(AccountID) on delete set null,
    FOREIGN KEY (CreditCardNumber) REFERENCES CreditCard(CardNumber) on delete set null,
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID) on delete set null,
    FOREIGN KEY (TruckID) REFERENCES Truck(TruckID) on delete set null,
    FOREIGN KEY (PlaneID) REFERENCES Plane(PlaneID) on delete set null,
    FOREIGN KEY (WarehouseID) REFERENCES Warehouse(WarehouseID) on delete set null
);

CREATE TABLE Orders (
    PackageID VARCHAR(6) ,
    SenderID VARCHAR(6) ,
    ReceiverID VARCHAR(6),
    ShippingDate DATETIME,
    ShippingCost DECIMAL(10,2),
    PromisedTime DATETIME,
    FOREIGN KEY (SenderID) REFERENCES Customer(CustomerID) ,
    FOREIGN KEY (ReceiverID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (PackageID) REFERENCES Package(PackageID) ,
    PRIMARY KEY (PackageID, SenderID, ReceiverID)
);

CREATE TABLE loc_of_pkg (
		PackageID VARCHAR(6) CHECK(PackageID LIKE 'P%'),
		WarehouseID VARCHAR(6) CHECK(WarehouseID LIKE 'W%'),
        Start_timestamp DATETIME,
        End_timestamp DATETIME,
        FOREIGN KEY (PackageID) REFERENCES Package(PackageID) on delete cascade,
		FOREIGN KEY (WarehouseID) REFERENCES Warehouse(WarehouseID) on delete cascade,
        PRIMARY KEY (PackageID,WarehouseID)
);

CREATE TABLE Works (
	EmployeeID VARCHAR(6) ,
    TruckID VARCHAR(6) ,
    PlaneID VARCHAR(6) ,
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID) on delete cascade,
	FOREIGN KEY (TruckID) REFERENCES Truck(TruckID) on delete cascade,
    FOREIGN KEY (PlaneID) REFERENCES Plane(PlaneID) on delete cascade,
    PRIMARY KEY (EmployeeID)
);

-- Data Input krlena apne se and check the queries accordingly agr kch doubts aaye toh group msg drop kr skte ho
-- Data entry
INSERT INTO Customer (CustomerID, Name, street, Address, Phone, Email, BillingMethod)
VALUES
    ('C251', 'Rahul Kumar', 'Chatra Rd', 'Ahmedabad, Gujarat, India', '6206676494', 'ravisharma122@gmail.com', 'Credit Card'),
    ('C126', 'Aayush kumar', 'Mango Rd', 'Vadodara, Gujarat, India', '8761752014', 'anitaverma455@rediffmail.com', 'Invoice'),
    ('C537', 'Anshu kumar', 'Bihar Rd', 'Surat, Gujarat, India', '8091648164', 'viveksingh@gmail.com', 'Credit Card'),
    ('C841', 'Mohit kumar', 'Stat Street', 'Rajkot, Gujarat, India', '8461854738', 'nehagupta@rediffmail.com', 'Invoice'),
    ('C952', 'Lavkush kumar ', 'Hazaribag Street', 'Gandhinagar, Gujarat, India', '8961853084', 'priyapatel@gmail.com', 'Credit Card');


INSERT INTO Account (AccountID, AccountNumber, CustomerID)
VALUES
    (101, 'A12345', 'C251'),
    (102, 'B67890', 'C126'),
    (103, 'C24680', 'C537'),
    (104, 'D13579', 'C841'),
    (105, 'E97531', 'C952');


INSERT INTO CreditCard (CardNumber, CustomerID, ExpirationDate, SecurityCode)
VALUES
    (1234567890123456, 'C251', '2025-12-31', 123),
    (2345678901234567, 'C126', '2024-10-31', 456),
    (3456789012345678, 'C537', '2023-05-31', 789),
    (4567890123456789, 'C841', '2024-03-31', 321),
    (5678901234567890, 'C952', '2025-08-31', 654);



INSERT INTO Employee (EmployeeID, Name, Address, Phone, Email, Role)
VALUES
    ('E201', 'Parth Patel', '123 Business St, Hyderabad,India', '555-1231', 'rajeshkumar201@shipmante.com', 'Driver'),
    ('E202', 'Priya Singh', '456 Service Rd, Bangalore,India', '555-2852', 'priyasingh202@shipmante.com', 'Pilot'),
    ('E203', 'Alok Sharma', '789 Logistics Ave, Bhubaneswar,India', '555-3413', 'sharmaalok203@shipmante.com', 'Warehouse Manager'),
    ('E204', 'Kiran Patel', '321 Distribution Blvd, Kolkata,India', '555-6144', 'kiranpatel204@shipmante.com', 'Logistics Coordinator'),
    ('E205', 'Deepak Shah', '555 Delivery Ln, Nagpur,India', '555-7896', 'shahdeepak205@shipmante.com', 'Driver');



INSERT INTO Warehouse (WarehouseID, Address, Phone, Email)
VALUES
    ('W301', '123 Main St, Ahmedabad,Gujarat,India', '555-1234', 'warehouse1@shipmate.com'),
    ('W302', '456 Oak Ave, Vadodara,Gujarat,India', '555-5678', 'warehouse2@shipmate.com'),
    ('W303', '789 Elm St, Surat,Gujarat,India', '555-9876', 'warehouse3@shipmate.com'),
    ('W304', '321 Cedar Ln, Rajkot,Gujarat,India', '555-4321', 'warehouse4@shipmate.com'),
    ('W305', '555 Pine Rd, Gandhinagar,Gujarat,India', '555-1111', 'warehouse5@shipmate.com');


INSERT INTO Truck (TruckID, PlateNumber, Capacity, EmployeeID, WarehouseID)
VALUES
    ('T1721', 'ABC123', 5000.00, 'E201', 'W301'),
    ('T1722', 'XYZ789', 6000.00, 'E205', 'W305'),
    ('T1723', 'DEF456', 5500.00, 'E201', 'W302'),
    ('T1724', 'GHI789', 7000.00, 'E205', 'W304'),
    ('T1725', 'JKL012', 4500.00, 'E205', 'W303');

INSERT INTO Plane (PlaneID, TailNumber, Capacity, EmployeeID, WarehouseID)
VALUES
    ('Pl1', 'PLN123', 7500.00, 'E202', 'W301'),
    ('Pl2', 'PLN456', 8000.00, 'E204', 'W302'),
    ('Pl3', 'PLN789', 7000.00, 'E202', 'W303'),
    ('Pl4', 'PLN012', 8500.00, 'E203', 'W304'),
    ('Pl5', 'PLN345', 9000.00, 'E204', 'W305');


INSERT INTO Package (PackageID, Type, Weight, DeliveryTime, Status, AccountID, CreditCardNumber, EmployeeID, TruckID, PlaneID, WarehouseID)
VALUES
    ('P1001', 'Box', 10.5, '2024-04-01 10:00:00', 'In Transit', 101, 1234567890123456, 'E201', 'T1721', 'Pl1', 'W301'),
    ('P1002', 'Envelope', 5.2, '2024-04-02 15:00:00', 'Delivered', 102, 2345678901234567, 'E205', 'T1722', 'Pl2', 'W305'),
    ('P1003', 'Box', 8.8, '2024-04-03 8:30:00', 'Delivered', 103, 3456789012345678, 'E201', 'T1721', 'Pl1', 'W302'),
    ('P1004', 'Package', 12.0, '2024-04-04 09:45:00', 'In Transit', 104, 4567890123456789, 'E205', 'T1724', 'Pl4', 'W304'),
    ('P1005', 'Crate', 3.5, '2024-04-05 14:00:00', 'In Transit', 105, 5678901234567890, 'E201', 'T1725', 'Pl3', 'W303');


select * from package;

INSERT INTO Orders (PackageID, SenderID, ReceiverID, ShippingDate, ShippingCost, PromisedTime)
VALUES
    ('P1001', 'C251', 'C537', '2024-04-01 10:00:00', 2525.00, '2024-04-04 12:00:00'),
    ('P1002', 'C126', 'C841', '2023-04-02 15:00:00', 250.00, '2023-04-03 18:00:00'),
    ('P1003', 'C537', 'C952', '2024-03-03 12:30:00', 2000.00, '2024-03-09 12:30:00'),
    ('P1004', 'C841', 'C251', '2024-04-04 09:45:00', 3030.00, '2024-04-07 14:00:00'),
    ('P1005', 'C251', 'C126', '2023-04-05 14:00:00', 4215.00, '2023-04-08 16:00:00');


INSERT INTO loc_of_pkg (PackageID, WarehouseID, Start_timestamp, End_timestamp)
VALUES 
    ('P1001', 'W301', '2024-04-20 10:00:00', '2024-04-20 12:00:00'),
    ('P1002', 'W302', '2024-04-19 15:30:00', '2024-04-19 18:00:00'),
    ('P1003', 'W301', '2024-04-18 09:00:00', '2024-04-18 11:30:00'),
    ('P1004', 'W303', '2024-04-17 14:00:00', '2024-04-17 16:30:00'),
    ('P1001', 'W302', '2024-04-30 10:00:00', '2024-05-05 12:00:00'),
    ('P1002', 'W301', '2024-04-21 15:30:00', '2024-04-25 16:00:00'),
    ('P1005', 'W302', '2024-04-16 11:45:00', '2024-04-16 13:30:00');

INSERT INTO Works (EmployeeID, TruckID, PlaneID)
VALUES 
    ('E201', 'T1721', NULL),
    ('E202', NULL, 'Pl2'),
    ('E203', NULL, 'Pl4'),
    ('E204', 'T1723', NULL),
    ('E205', 'T1722', NULL);

-- Queries

-- 1.a
SELECT DISTINCT Customer.Name, Customer.Address
FROM Package
JOIN Orders ON Package.PackageID = Orders.PackageID
JOIN customer ON customer.CustomerID = Orders.SenderID
WHERE Package.TruckID = 'T1721' and Package.Status <> 'Delivered';

-- 1.b
SELECT DISTINCT customer.Name, customer.Address
FROM Package
JOIN Orders ON Package.PackageID = Orders.PackageID
JOIN customer ON customer.CustomerID= Orders.ReceiverID
WHERE Package.TruckID = 'T1721';

-- 1.c
SELECT MAX(DeliveryTime),PackageID
FROM Package
where TruckID = 'T1721' AND Status = 'Delivered'
group by packageID;

-- 2
SELECT Customer.Name, COUNT(Package.PackageID)
FROM Package
JOIN orders ON Package.PackageID = orders.PackageID
JOIN customer ON customer.customerID= orders.senderID
WHERE year(orders.ShippingDate) = year(date_sub(curdate(),interval 1 year))
GROUP BY Customer.Name
ORDER BY COUNT(Package.PackageID) DESC
LIMIT 1;

-- 3
SELECT Customer.Name, SUM(orders.ShippingCost)
FROM Package
JOIN orders ON Package.packageID = orders.packageID
JOIN customer on customer.customerID= orders.senderID
WHERE year(orders.ShippingDate) = year(date_sub(curdate(),interval 1 year))
GROUP BY Customer.Name
ORDER BY SUM(orders.ShippingCost) DESC
LIMIT 1;

-- 4
SELECT street, COUNT(CustomerID)
FROM Customer
GROUP BY street
ORDER BY COUNT(CustomerID) DESC
LIMIT 1;

-- 5
SELECT package.PackageID, DeliveryTime, PromisedTime
FROM package
JOIN orders on orders.packageID= package.packageID
WHERE package.DeliveryTime > orders.PromisedTime;

-- 6.a
SELECT Customer.Name, Customer.Address, SUM(orders.ShippingCost)
FROM orders
JOIN Customer ON orders.senderID = Customer.CustomerID
WHERE month(orders.ShippingDate) = month(date_sub(curdate(),interval 1 month))
GROUP BY Customer.Name, Customer.Address;

-- 6.b
SELECT Customer.Name, Package.Type, SUM(orders.ShippingCost)
FROM Package
JOIN orders ON Package.packageID = orders.packageID
JOIN customer ON customer.customerID = orders.senderID
WHERE month(orders.ShippingDate) = month(date_sub(curdate(),interval 1 month))
GROUP BY Customer.Name, Package.Type;

-- 6.c
SELECT Customer.Name, Package.PackageID,Package.Type, orders.ShippingDate, orders.ShippingCost
FROM Package
JOIN orders ON Package.packageID = orders.packageID
JOIN customer on customer.customerID = orders.senderID
WHERE month(orders.ShippingDate) = month(date_sub(curdate(),interval 1 month));

show table
