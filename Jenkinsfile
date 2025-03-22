pipeline {
    agent any

    /*
    environment {
        CHROME_PATH = "/usr/bin/google-chrome-stable"
        LHCI_BUILD_CONTEXT__EXTERNAL_BUILD_URL = "${env.BUILD_URL}"
    }
    */

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        /*
        stage('Machine Setup') {
            steps {
                script {
                    sh '''
                    #!/bin/bash
                    set -euxo pipefail

                    # Install required dependencies
                    apt update && apt install -y wget curl ca-certificates

                    # Remove any existing Google Chrome sources
                    rm -f /etc/apt/sources.list.d/google-chrome.list
                    rm -f /usr/share/keyrings/google-chrome-keyring.gpg

                    # Download and add Google Chrome GPG key
                    wget -qO - https://dl.google.com/linux/linux_signing_key.pub | tee /usr/share/keyrings/google-chrome-keyring.gpg > /dev/null

                    # Add Google Chrome repository
                    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list

                    # Install Node.js 18.x
                    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
                    apt install -y nodejs

                    # Update package lists and install Google Chrome
                    apt update && apt install -y google-chrome-stable
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                    #!/bin/bash
                    set -euxo pipefail

                    # Install project dependencies using npm
                    npm install
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh '''
                    #!/bin/bash
                    set -euxo pipefail

                    # Run the build process
                    npm run build
                    '''
                }
            }
        }
        */
         stage('Lighthouse CI') {
            steps {
                script {
                    sh '''
                    #!/bin/bash
                    # Install and run Lighthouse CI
                    # npm install -g @lhci/cli@0.14.x
                    lhci autorun
                    '''
                }
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



