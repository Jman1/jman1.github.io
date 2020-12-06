FROM openjdk:8-alpine

COPY target/uberjar/jordanwebsites.jar /jordanwebsites/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/jordanwebsites/app.jar"]
