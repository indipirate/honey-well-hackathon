-- MOVIES
INSERT INTO MOVIE VALUES(1,180,'Phataan', CURRENT_TIMESTAMP());
INSERT INTO MOVIE VALUES(2,190,'Avatar: The way of Water', CURRENT_TIMESTAMP());
-- SHOWS
INSERT INTO SHOW VALUES(1, '2:45');
INSERT INTO SHOW VALUES(2, '22:45');
-- tHEATERS
INSERT INTO THEATER VALUES(1,'AMB CINEMAS');
INSERT INTO THEATER VALUES(2,'PVR MOVIES');
-- SEAT TIERS
INSERT INTO SEAT_TIER VALUES (1, 'PREMIUM' ,  100);
INSERT INTO SEAT_TIER VALUES (2, 'GOLD' ,  150);
INSERT INTO SEAT_TIER VALUES (3, 'PLATINUM' ,  200);
-- SCREENS
INSERT INTO SCREEN VALUES(1,1,1);
INSERT INTO SCREEN VALUES(2,2,2);
INSERT INTO SCREEN VALUES(3,2,1);
INSERT INTO SCREEN VALUES(4,1,2);
-- SEATS
INSERT INTO SEAT VALUES(1,20,2,1);
INSERT INTO SEAT VALUES(2,30,3,2);
INSERT INTO SEAT VALUES(3,60,6,3);
-- SCREEN SEATS
INSERT INTO SCREEN_SEAT VALUES(1,1);
INSERT INTO SCREEN_SEAT VALUES(1,2);
INSERT INTO SCREEN_SEAT VALUES(1,3);
INSERT INTO SCREEN_SEAT VALUES(2,1);
INSERT INTO SCREEN_SEAT VALUES(2,2);
INSERT INTO SCREEN_SEAT VALUES(2,3);
INSERT INTO SCREEN_SEAT VALUES(3,1);
INSERT INTO SCREEN_SEAT VALUES(3,2);
INSERT INTO SCREEN_SEAT VALUES(3,3);
INSERT INTO SCREEN_SEAT VALUES(4,1);
INSERT INTO SCREEN_SEAT VALUES(4,2);
INSERT INTO SCREEN_SEAT VALUES(4,3);
-- SCREEN SHOW
INSERT INTO SCREEN_SHOW VALUES(1,2);
INSERT INTO SCREEN_SHOW VALUES(2,2);
