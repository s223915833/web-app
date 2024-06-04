pipeline {
    agent any
    
    tools {
        nodejs "NodeJS1" 
    }
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/s223915833/web-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
            }
        }
    }
}
