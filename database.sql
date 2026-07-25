-- =====================================
-- Kick Clone Database
-- =====================================

CREATE DATABASE IF NOT EXISTS kick_clone;

USE kick_clone;


-- USERS TABLE

CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(50) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    role ENUM('viewer','streamer','admin') DEFAULT 'viewer',

    avatar VARCHAR(255) DEFAULT NULL,

    balance DECIMAL(10,2) DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



-- STREAMS TABLE

CREATE TABLE streams (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    title VARCHAR(100) NOT NULL,

    category VARCHAR(100),

    stream_key VARCHAR(255),

    thumbnail VARCHAR(255),

    viewers INT DEFAULT 0,

    status ENUM('offline','live') DEFAULT 'offline',

    started_at TIMESTAMP NULL,

    FOREIGN KEY(user_id) REFERENCES users(id)
    ON DELETE CASCADE

);



-- FOLLOWERS TABLE

CREATE TABLE followers (

    id INT AUTO_INCREMENT PRIMARY KEY,

    follower_id INT NOT NULL,

    streamer_id INT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(follower_id)
    REFERENCES users(id)
    ON DELETE CASCADE,

    FOREIGN KEY(streamer_id)
    REFERENCES users(id)
    ON DELETE CASCADE

);



-- CHAT MESSAGES

CREATE TABLE chat_messages (

    id INT AUTO_INCREMENT PRIMARY KEY,

    stream_id INT NOT NULL,

    user_id INT NOT NULL,

    message TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(stream_id)
    REFERENCES streams(id)
    ON DELETE CASCADE,


    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE CASCADE

);



-- AD REVENUE

CREATE TABLE ad_revenue (

    id INT AUTO_INCREMENT PRIMARY KEY,

    streamer_id INT NOT NULL,

    amount DECIMAL(10,2) NOT NULL,

    source VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(streamer_id)
    REFERENCES users(id)
    ON DELETE CASCADE

);



-- PAYOUT REQUESTS

CREATE TABLE payouts (

    id INT AUTO_INCREMENT PRIMARY KEY,

    streamer_id INT NOT NULL,

    amount DECIMAL(10,2) NOT NULL,

    status ENUM(
        'pending',
        'approved',
        'paid',
        'rejected'
    ) DEFAULT 'pending',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(streamer_id)
    REFERENCES users(id)
    ON DELETE CASCADE

);



-- TRANSACTIONS

CREATE TABLE transactions (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    type VARCHAR(50),

    amount DECIMAL(10,2),

    description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE CASCADE

);



-- ADMIN USER SAMPLE

INSERT INTO users
(username,email,password,role)
VALUES
(
'admin',
'admin@kickclone.com',
'admin123',
'admin'
);
