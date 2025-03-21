pipeline {
    agent any

    stages {
        stage('Run Lighthouse CI') {
            steps {
                    sh 'lhci autorun'
                }
            }
        }
    }

    post {
        failure {
            echo 'Lighthouse CI testing failed.'
        }
        success {
            echo 'Lighthouse CI testing completed successfully.'
        }
    }



