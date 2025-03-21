pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Run Lighthouse CI') {
            steps {
                sh 'lhci autorun'
            }
        }
    }

    post {
        always {
            echo 'Lighthouse CI pipeline completed.'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}



