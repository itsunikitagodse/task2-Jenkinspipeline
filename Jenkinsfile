pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/itsunikitagodse/task2-Jenkinspipeline.git'
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -t your-app-image .'
      }
    }

    stage('Test') {
      steps {
        sh 'echo "Run tests here"'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker run -d -p 3000:3000 your-app-image'
      }
    }
  }
}
