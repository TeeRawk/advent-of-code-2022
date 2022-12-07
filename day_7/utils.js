module.exports = {
    buildFileTreeWithInput(input) {
        let currentPath = '';

        return input.reduce((currentTreeValue, currentInput) => {
            const isCommand = currentInput.startsWith('$');
            if (isCommand) {
                const isMovingThroughTree = currentInput.includes('cd');
                if (isMovingThroughTree) {
                    const folder = currentInput.replace('$ cd ', '');
                    const isGoToRoot = folder === '/';
                    const isGoBack = folder === '..';
                    if (isGoToRoot) {
                        currentPath = '/';
                    } else if (isGoBack) {
                        const currentPathNesting = currentPath.split('.');
                        const currentPathLength = currentPathNesting[currentPathNesting.length - 1].length + 1;
                        currentPath = currentPath.substring(0, currentPath.length - currentPathLength);
                    } else {
                        currentPath = currentPath + `.${folder}`;
                    }
                }
            } else {
                const isFolder = currentInput.includes('dir')
                if (isFolder) {
                    const folderName = currentInput.replace('dir ', '');
                    const foldersPath = currentPath + '.' + folderName;
                    currentTreeValue[currentPath].subFolders.push(foldersPath);
                    if (!currentTreeValue[foldersPath]) {
                        currentTreeValue[foldersPath] = {
                            type: 'folder',
                            totalSize: 0,
                            subFolders: []
                        };
                    }
                } else {
                    const fileSizeAndName = currentInput.split(' ');
                    const fileSize = Number(fileSizeAndName[0]);
                    const fileName = fileSizeAndName[1];
                    const filPath = currentPath + '.' + fileName;
                    currentTreeValue[currentPath].subFolders.push(filPath);
                    let iteratedPath = currentPath;
                    console.log('currentPath Total', currentPath)

                    while (iteratedPath.length !== 0) {
                        currentTreeValue[iteratedPath] = {
                            ...currentTreeValue[iteratedPath],
                            totalSize: currentTreeValue[iteratedPath].totalSize + fileSize
                        };
                        const currentPathNesting = iteratedPath.split('.');
                        const currentPathLength = currentPathNesting[currentPathNesting.length - 1].length + 1;
                        iteratedPath = iteratedPath.substring(0, iteratedPath.length - currentPathLength);
                    }
                }
            }

            return currentTreeValue;
        }, {
            '/': {
                type: 'folder',
                totalSize: 0,
                subFolders: []
            }
        })
    }
}