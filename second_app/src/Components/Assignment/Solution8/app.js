import Folder from "./Components/Assignment/Solution8/Folder"
const App = () => {
  const folderStructure = {
    name: 'Main Folder',
    folders: [
      {
        name: 'Folder 1',
        folders: [
          {
            name: 'Subfolder 1',
            folders: [],
            files: [{ name: 'File 1' }, { name: 'File 2' }],
          },
      
        ],
        files: [],
      },
      {
        name: 'Folder 2',
        folders: [],
        files: [{ name: 'File 2' }],
      },
    ],
    files: [],
  };

  return (
    <div>
     
      <Folder folder={folderStructure} />
    </div>
  );
};

export default App;