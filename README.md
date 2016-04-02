# SolidSaturn

SolidSaturn is and online learning platform powered by Node.js and Angular.js.  It's built on RethinkDB, Redis and Elastic Search databases. It utilizes web sockets for instant interactions and real-time notifications. SolidSaturn is compatible with Chome and Firefox and has many modern features out of the box such as social network integration and streaming discussions.

## Installation

#### solid-saturn install:

````
git clone https://git.spoxr.com/ops/solid-saturn.git
````

````
cd solid-saturn
````

````
docker build -t="spoxr/solid-saturn" .
````

````
docker run --restart=always --name solid-saturn -v /home/macneib/solid-saturn/log:/app/server/log -p 127.0.0.1:4000:4000 -p 127.0.0.1:4001:4001 -p 127.0.0.1:5000:5000 -p 8000:8080 --link rethinkdb:rethinkdb --link redis:redis -d spoxr/solid-saturn
````

#### solid-saturn deploy


````
docker pull registry.spoxr.com:5000/spoxr/solid-saturn:x.x.x
````

````
docker run --name solid-saturn -p 127.0.0.1::3000 --link rethinkdb-proxy:rethinkdb --link redis:redis -d registry.spoxr.com:5000/spoxr/solid-saturn:x.x.x
````



## Issues and Marge Requests

Courtesy should always be shown to individuals submitting issues and merge requests.

### Bugs
##### Where to Find Known Issues

We will be using Spoxr's Trello Product Roadmap for our bugs. We will keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

##### Reporting New Issues

The best way to get your bug fixed is to describe a reduced test case on Slack or Trello.

##### Security Bugs

Please report on slack as well.


#### Severity:

**Critical**: The defect that results in the termination of the complete system or one or more component of the system and causes extensive corruption of the data. The failed function is unusable and there is no acceptable alternative method to achieve the required results then the severity will be stated as critical.

**Major**: The defect that results in the termination of the complete system or one or more component of the system and causes extensive corruption of the data. The failed function is unusable but there exists an acceptable alternative method to achieve the required results then the severity will be stated as major.

**Moderate**: The defect that does not result in the termination, but causes the system to produce incorrect, incomplete or inconsistent results then the severity will be stated as moderate.Minor: The defect that does not result in the termination and does not damage the usability of the system and the desired results can be easily obtained by working around the defects then the severity is stated as minor.

**Cosmetic**: The defect that is related to the enhancement of the system where the changes are related to the look and field of the application then the severity is stated as cosmetic. 

#### Priority:

**Low**: The defect is an irritant which should be repaired, but repair can be deferred until after more serious defect have been fixed.

**Medium**: The defect should be resolved in the normal course of development activities. It can wait until a new build or version is created.

**High**: The defect must be resolved as soon as possible because the defect is affecting the application or the product severely. The system cannot be used until the  repair has been done.

#### Examples

Few very important scenarios related to the severity and priority.

**High Priority & High Severity**: An error which occurs on the basic functionality of the application and will not allow the user to use the system. (Eg. A site maintaining the student details, on saving record if it, doesn’t allow to save the record then this is high priority and high severity bug.)

**High Priority & Low Severity**: The spelling mistakes that happens on the cover page or heading or title of an application.

**High Severity & Low Priority**: An error which occurs on the functionality of the application (for which there is no workaround) and will not allow the user to use the system but on click of link which is rarely used by the end user.

**Low Priority and Low Severity**: Any cosmetic or spelling issues which is within a paragraph or in the report (Not on cover page, heading, title).