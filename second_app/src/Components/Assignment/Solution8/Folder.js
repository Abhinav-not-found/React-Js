//Create a react application that simulates a nested folder structure. you should have a folder component that contains sub-folders and files.
//Each folder should have a name, and each file should have a name. The application should display the folder structure and allow clicking on a
//folder to expand its content. When clicking on a file, display an alert with file name.
import React from 'react';

const folderStructure = [
  {
    name: "folder1",
    file: [
      { name: "fileA", size: "10kb" },
      { name: "FileB", size: "20kb" }
    ]
  },
  {
    name: "folder2",
    file: [
      { name: "fileA", size: "100kb" }
    ]
  }
];

export default class Dropdown extends React.Component {
  state = {
    expandedFolders: []
  };

  fileClick = (fileName) => {
    alert(fileName);
  };

  render() {
    const { expandedFolders } = this.state;

    return (
      <div>
        {folderStructure.map(folder => (
          <div key={folder.name}>
            <h3 onClick={() => {
              if (expandedFolders.includes(folder.name)) {
                this.setState({
                  expandedFolders: expandedFolders.filter(name => name !== folder.name)
                });
              } else {
                this.setState({
                  expandedFolders: [...expandedFolders, folder.name]
                });
              }
            }}>{folder.name}</h3>
            {expandedFolders.includes(folder.name) && folder.file.map(file => (
              <h1 key={file.name} onClick={() => this.fileClick(file.name)}>
                {file.name}
              </h1>
            ))}
          </div>
        ))}
      </div>
    );
  }
}