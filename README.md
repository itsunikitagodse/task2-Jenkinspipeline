# task2-Jenkinspipeline

# Task 2 - Jenkins CI/CD Pipeline with Docker

This project demonstrates a basic CI/CD pipeline using Jenkins and Docker for a simple Node.js web application.

## Technologies Used

- Node.js
- Docker
- Jenkins
- GitHub

 Project Structure

task2-JenkinsPipeline/
├── index.js # Main app file
├── Dockerfile # Docker instructions
├── Jenkinsfile # Jenkins pipeline script
├── package.json # Node dependencies and scripts
└── README.md # Documentation

Getting Started

1. Clone the repo
git clone https://github.com/YOUR_USERNAME/task2-JenkinsPipeline.git
cd task2-JenkinsPipeline

2. Start Jenkins with Docker
docker run -d --name jenkins \
  -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkins/jenkins:lts

3. Configure Jenkins
Install recommended plugins
Add pipeline project with GitHub integration
Use Jenkinsfile for pipeline definition

4. Build Pipeline
Push changes to GitHub
Jenkins will trigger automatically (or run manually)
It builds the Docker image and runs the app

**Build Process**
Build Stage - Docker image is built
Test Stage - Placeholder test runs
Deploy Stage - Runs the app in a container

** Output**
Visit http://localhost:3000 to see:
Hello from Jenkins CI/CD Pipeline

** Cleanup**
docker stop jenkins
docker rm jenkins
docker volume rm jenkins_home
