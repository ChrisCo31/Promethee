node {      
    stage('Run JOB1-3') {   

        build job: 'JOB1-3'  

    }

    stage('Run JOB2-3') {

        build job: 'JOB2-3'  

    }

    stage('Run Shell') {
        sh "ls -l"
        sh "env"
    }

}
