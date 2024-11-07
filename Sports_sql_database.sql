-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2023 at 08:31 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE Team_tbl (
    team_id INT PRIMARY KEY,                -- Unique identifier for each team
    team_name VARCHAR(100),                 -- Name of the team
    coach_name VARCHAR(100),                -- Name of the team's coach
    team_location VARCHAR(100),             -- Location of the team
    match_id INT                            -- Foreign key for the match
);
alter table team_tbl
add constraint t_fk
foreign key (match_id)
references match_tbl(match_id)
on update cascade
on delete cascade;


-- alter table team_tbl
-- drop foreign key t_fk; 



CREATE TABLE Player_tbl (
    player_id INT PRIMARY KEY,              -- Unique identifier for each player
    team_id INT,                            -- Foreign key linking to the team table
    player_name VARCHAR(100),               -- Name of the player
    student_id INT,                         -- Student ID of the player
	university_dept VARCHAR(100),           -- Department of the university to which the team belongs
    player_position VARCHAR(50),            -- Position of the player in the team
    player_year INT,                        -- Year of the player (e.g., freshman, sophomore)
    player_age INT,                         -- Age of the player
    player_DOB DATE,	                        -- Date of birth of the player
	FOREIGN KEY (team_id) references Team_tbl(team_id)
    on update cascade
    on delete cascade
  );
  desc player_tbl;

CREATE TABLE Match_tbl (
    match_id INT PRIMARY KEY,               
    university_team_id int,                 
    opposing_team_name VARCHAR(100),       
    match_date DATE,                        
    venue_id INT,                           
    match_result VARCHAR(50)              
   
);
ALTER TABLE Match_tbl
MODIFY university_team_id int;

-- ALTER TABLE match_tbl
-- DROP FOREIGN KEY m_fk;


alter table match_tbl
add constraint m_fk
foreign key (university_team_id)
references Tournament_tbl(tournament_id)
on update cascade
on delete cascade;

alter table match_tbl
add constraint m_fk2
foreign key (venue_id)
references tournament_tbl(tournament_id)
on update cascade
on  delete cascade;

-- CREATE TABLE Tournament_tbl (
--     tournament_id int PRIMARY KEY,      -- Unique identifier for each tournament
--     university_team_id INT,                 -- ID for the university team
--     opposite_team_id INT,                   -- ID for the opposing team
--     tournament_name VARCHAR(50),            -- Name of the tournament
--     start_date DATE,                        -- Start date of the tournament
--     end_date DATE,                          -- End date of the tournament
--     venue_id INT,                           -- ID for the venue
--     match_result VARCHAR(50)                -- Result of the match
-- );
-- alter table tournament_tbl
-- add constraint tour_fk
-- foreign key (venue_id)
-- references venue_tbl(venue_id)
-- on update cascade
-- on delete cascade;

CREATE TABLE Venue_tbl (
    venue_id INT PRIMARY KEY,               -- Unique identifier for each venue
    venue_name VARCHAR(100),                -- Name of the venue
    venue_location VARCHAR(100)             -- Location of the venue
);
