const {buildFileTreeWithInput} = require("./utils");
const {readInput} = require("../utils");

const totalDeviceCapacity = 70000000;
const spaceNeededForUpdate = 30000000;

const task_1 = () => {
    const input = readInput(7)
    const fileTree = buildFileTreeWithInput(input);

    const freeSpace = totalDeviceCapacity - fileTree['/'].totalSize;
    const spaceToBeFreed = spaceNeededForUpdate - freeSpace;

    let totalSizeOfDirectoryToBeRemoved = fileTree['/'].totalSize;

    Object.values(fileTree).forEach((currentDir) => {
        if (currentDir.totalSize >= spaceToBeFreed && currentDir.totalSize < totalSizeOfDirectoryToBeRemoved) {
            totalSizeOfDirectoryToBeRemoved = currentDir.totalSize;
        }
    });

    return totalSizeOfDirectoryToBeRemoved;
}


console.log('Result', task_1())