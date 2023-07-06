//Create a react application that simulates a nested folder structure. you should have a folder component that contains sub-folders and files.
//Each folder should have a name, and each file should have a name. The application should display the folder structure and allow clicking on a
//folder to expand its content. When clicking on a file, display an alert with file name.
import React from 'react';
class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedFolders: []
    };
  }

  handleClick = (folderName) => {
    const { expandedFolders } = this.state;
    const isFolderExpanded = expandedFolders.includes(folderName);

    if (isFolderExpanded) {
      this.setState(prevState => ({
        expandedFolders: prevState.expandedFolders.filter(
          folder => folder !== folderName
        )
      }));
    } else {
      this.setState(prevState => ({
        expandedFolders: [...prevState.expandedFolders, folderName]
      }));
    }
  };

  render() {
    const { folder } = this.props;
    const { expandedFolders } = this.state;

    return (
      <div>
        <div onClick={() => this.handleClick(folder.name)}>
          <strong>{folder.name}</strong>
        </div>
        {expandedFolders.includes(folder.name) && (
          <ul style={{ paddingLeft: '20px' }}>
            {folder.folders.map(subFolder => (
              <li key={subFolder.name}>
                <Folder folder={subFolder} />
              </li>
            ))}
            {folder.files.map(file => (
              <li key={file.name}>
                <div onClick={() => alert(`Clicked on file: ${file.name}`)}>
                  {file.name}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default Folder;
