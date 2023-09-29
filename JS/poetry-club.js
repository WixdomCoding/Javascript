console.log("\n\nPoetry club Code:\n");

const frontDoorResponse = string => string.charAt(0);
console.log(frontDoorResponse('Stands so high'));

const frontDoorPassword = string => string.toLowerCase().replace(/^\w/, c => c.toUpperCase());
console.log(frontDoorPassword('SHIRE'));
console.log(frontDoorPassword('shire'));

const backDoorResponse = string => string.trim().slice(-1);
console.log(backDoorResponse('Stands so high'));
console.log(backDoorResponse('Stands so high   '));

const backDoorPassword = string => {
    string = frontDoorPassword(string);
    if (!string.endsWith("please")) {
        string += ", please";
    }
    return string;
}
console.log(backDoorPassword("horse"));
