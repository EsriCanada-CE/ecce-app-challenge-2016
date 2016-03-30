Sustain- a -City App , by All EnCompass
=======================================

1.  Mission statement for the app (i.e. what the app seeks to achieve
    and why)
2.  Statement of the characteristics of the app that make it appealing,
    interesting and useful (i.e. how does it help the end user)
3.  A video with voice over that demonstrates use of the app
4.  A well-structured readme file on GitHub that states the goals of the
    app and how to use it
5.  Completed GitHub code repository with instructions for download and
    installation
6.  User interface (quality of user experience)
7.  Reliability (i.e. not prone to crash).

Mission Statement
-----------------

Sustain –a – City is an interactive app designed to help the user choose
their optimal Canadian City based on their ranking of importance for
seven different areas of sustainability.

Sustainability has become a way of life for many cities in Canada, a
vast country, rich in natural resources and cultural diversity. The
seven indices used in the sustainability ranking system are as follows:

1.  Desired Population
2.  Labor Force Stability
3.  Household Census Data
4.  Waste & Water Management
5.  Community Safety & Education
6.  Green Mobility
7.  Environmental Conservation

Users begin the app by taking the ‘Sustainable Cities Quiz’. The quiz is
comprised of questions regarding the sustainability indices listed
above. The user ranks the level of importance for each index from a drop
down list of importance levels. Once the user completes the quiz they
can make use of the other features within the app, which include: \> - A
Map Journal Application: details each of the 23 cities’ sustainable
initiatives along with general description pop-ups for each city. \> - A
Most Popular Cities Map: makes use of a heat map that the user can view
to see the most popular city results among users. \> - A Twitter
Application: Users can see the latest Tweets regarding sustainability,
environment, conservation and climate change. Once the user browses
through the various features of the application they come to a most
recent results page where they can find their ideal city. The last
feature of the app is a map that pins the user’s city and they can
locate it on the map.

The focus of this application to increase the user’s awareness about
sustainability and sustainable initiatives in the major urban centres of
Canada. Sustainability is crucial to the balance and well-being of a
city’s operations and development. This app allows users to pinpoint
what areas of sustainability are important to them and which cities in
Canada possess such qualities. The heat map overtime will also lead to
an indication of what users are looking for in a city and what features
are most important to them.

Statement of Characteristics
----------------------------

*Functionality*

**Back End**

All EnCompass used Google forms with a backend of Google sheets to
generate the quiz, results and subsequent maps. The Google form was
linked with the Google sheet that automatically updated the information
as a user completed the quiz.

and logic was done in the google sheet in order to

**Location and Scope**

The scope of the area consisted of main cities throughout Canada. the
total amount of cities was 23 and they contain descriptions about the
city and the sustainability initiatives.

The datasets used to develop this application came from Corporate
Knights from a table that consisted of the 23 cities and there seven
indices used in the sustainability.

**Design and Development**

1.  Initially found data and implemented it within tables
2.  Created form and logic for the back end of processing that would
    later be implemented in maps
3.  Collected data for each city and sustainable initiatives
4.  Created multiple web maps that consisted of: map with description of
    cities, map displaying heat map of most selected cities, and lastly
    a map that contained the last five results of the Google form
    results
5.  Created web applications that consisted of a Map Series that
    incorporated two other applications (Map Journal and Public
    Informations (Twitter))
6.  In addition added the result of the Google Form with a table format
    within series that contained the last five results
7.  Formatted and edited app for optimal use

**Creating the Data**

The dataset used to build the ranking system for each city came from the
Corporate Knights Sustainability Index.

The Google spreadsheets backend uses a similar response matching
algorithm based on how well each city did in each sustainability
category and finds the similar response of the user.

Set up: Each city was ranked from 0 to 10 in each area of
sustainability. Six areas of sustainability were included along with
population data. We developed a range of importance from 1 to 6 as
follows: 1. Not At All 2. Least Important 3. Somewhat Important 4.
Medium 5. Important 6. Very Important

Utilizing the score each city obtained for each sustainability index,
the city was given a number that fit with the level of importance (from
1 to 6) and the sustainability index score from the dataset. For
example, if the city received a high sustainability index score it was
classified as ‘Very Important’ (obtained a score of 6). If the city
received a low sustainability index score it was classified as ‘Not At
All Important’.

The population was also taken into account. The range of population data
was as follows: 1. 100,000 - 200,000 2. 200,000 - 300,000 3. 300,000 -
400,000 4. 400,000 - 500,000 5. 500,000 - 600,000 6. 600,000 -
1,000,000+ These ranges were used to equally spread out the cities into
each category.

The logic followed through so that which ever city obtained the lowest
difference value between the user ranking and the sustainability index
ranking was the best result for the user.
