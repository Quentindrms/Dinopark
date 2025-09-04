CREATE TABLE Dinosaure(
   dinosaure_ID INT,
   dinosaure_name VARCHAR(50),
   dinosaure_diet  VARCHAR(50),
   dinosaure_description VARCHAR(50),
   PRIMARY KEY(dinosaure_ID)
);

CREATE TABLE Utilisateur(
   user_id INT,
   user_admin LOGICAL,
   user_surname VARCHAR(50),
   user_birthdate DATE,
   user_adress VARCHAR(50),
   user_mail VARCHAR(50),
   PRIMARY KEY(user_id)
);

CREATE TABLE ticket_type(
   ticket_type_id INT,
   ticket_type_name VARCHAR(50),
   ticket_type_price INT,
   PRIMARY KEY(ticket_type_id)
);

CREATE TABLE Réservation(
   reservation_id INT,
   reservation_date DATE,
   reservation_ticket_number INT,
   user_id INT NOT NULL,
   PRIMARY KEY(reservation_id),
   FOREIGN KEY(user_id) REFERENCES Utilisateur(user_id)
);

CREATE TABLE ticket (
   ticket_id INT,
   ticket_price DECIMAL(15,2),
   billet_quantity INT,
   ticket_type_id INT NOT NULL,
   PRIMARY KEY(ticket_id),
   FOREIGN KEY(ticket_type_id) REFERENCES ticket_type(ticket_type_id)
);

CREATE TABLE Accéder_(
   ticket_id INT,
   dinosaure_ID INT,
   PRIMARY KEY(ticket_id, dinosaure_ID),
   FOREIGN KEY(ticket_id) REFERENCES ticket (ticket_id),
   FOREIGN KEY(dinosaure_ID) REFERENCES Dinosaure(dinosaure_ID)
);

CREATE TABLE Identifier(
   reservation_id INT,
   ticket_id INT,
   PRIMARY KEY(reservation_id, ticket_id),
   FOREIGN KEY(reservation_id) REFERENCES Réservation(reservation_id),
   FOREIGN KEY(ticket_id) REFERENCES ticket (ticket_id)
);