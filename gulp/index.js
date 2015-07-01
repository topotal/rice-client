var fs = require('fs');
var filterScripts = require('./utils/filter-scripts');
var tasks = fs.readdirSync('./gulp/tasks').filter(filterScripts);

tasks.forEach(function(task){
    require('./tasks/' + task);
});
