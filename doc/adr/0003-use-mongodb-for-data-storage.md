# 3. Use MongoDB for data storage

Date: 2017-06-09

## Status

Accepted

## Context

Information about GP surgeries is required by the application in order to display to users.
A Docker image of GP data
([profiles-db](https://hub.docker.com/r/nhsuk/profiles-db/)) running a MongoDB
instance has been created for use by other applications.
NodeJS uses a single threaded event loop architecture and as such works best when the work it is doing is non-CPU intensive. Searching through datasets is potentially CPU intensive.

## Decision

We have decided to use the existing Docker image rather than spend effort
acquiring the data again.

## Consequences

If there are multiple consumers of the Docker image there might be conflicts on
the data contained within the image, both content and format.

The application is able to hand off any CPU intensive operations to the
database, ensuring the event loop isn't blocked.
The sharing of the image means any work done on improving the creation of the
image including data refresh frequency will be shared amongst all consumers.
MongoDB provides much more functionality than is required by the application
which may be leveraged in the future.
