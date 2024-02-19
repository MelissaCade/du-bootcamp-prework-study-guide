const topics = ['HTML', 'CSS', 'Git', 'JavaScript', 'CLI'];

function selectTopic() {
    if (topics === 'HTML') {
        console.log("Let's Study HTML!");
    } else if (topic === 'CSS') {
        console.log("Let's Study CSS!");
    } else if (topic === 'Git') {
        console.log("Let's Study Git!");
    } else if (topic === 'JavaScript') {
        console.log("Let's Study JavaScript!");
    } else if (topic === 'CLI') {
        console.log("Let's Study CLI!");
    } else {
        console.log('Please Try Again!');
    }
}
function listTopics() {
    for(let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}