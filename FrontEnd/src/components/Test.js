// import React, { useState } from 'react';


// export default function Upload() {
//     const [fileInputState, setFileInputState] = useState('');
//     const [previewSource, setPreviewSource] = useState('');
//     const [selectedFile, setSelectedFile] = useState();
//     const [successMsg, setSuccessMsg] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const handleFileInputChange = (e) => {
//         const file = e.target.files[0];
//         previewFile(file);
//         setSelectedFile(file);
//         setFileInputState(e.target.value);
//     };

//     const previewFile = (file) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//             console.log(reader.result) ;
//             setPreviewSource(reader.result);
//         };
//     };

//     const handleSubmitFile = (e) => {
//         e.preventDefault();
//         if (!selectedFile) return;
//         const reader = new FileReader();
//         reader.readAsDataURL(selectedFile);
//         reader.onloadend = () => {
//              uploadImage(reader.result);
//         };
//         reader.onerror = () => {
//             console.error('AHHHHHHHH!!');
//             setErrMsg('something went wrong!');
//         };
//     };

//     const uploadImage = async (base64EncodedImage) => {
//         try {
//             await fetch('http://localhost:5000/api/PostProduct', {
//                 method: 'POST',
//                 body: JSON.stringify({ data: base64EncodedImage }),
//                 headers: { 'Content-Type': 'application/json' },
//             });
//             setFileInputState('');
//             setPreviewSource('');
//             setSuccessMsg('Image uploaded successfully');
//         } catch (err) {
//             console.error(err);
//             setErrMsg('Something went wrong!');
//         }
//     };
//     return (
//         <div>
//             <h1 className="title">Upload an Image</h1>
//             {/* <Alert msg={errMsg} type="danger" />
//             <Alert msg={successMsg} type="success" /> */}
//             <form onSubmit={handleSubmitFile} className="form">
//                 <input
//                     id="fileInput"
//                     type="file"
//                     name="image"
//                     onChange={handleFileInputChange}
//                     value={fileInputState}
//                     className="form-input"
//                 />
//                 <button className="btn" type="submit">
//                     Submit
//                 </button>
//             </form>
//             {previewSource && (
//                 <img
//                     src={previewSource}
//                     alt="chosen"
//                     style={{ height: '300px' }}
//                 />
//             )}
//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { Image } from 'cloudinary-react';

// export default function Home() {
//     const [Products, setProducts] = useState();
//     const loadImages = async () => {
//         try {
//             const res = await fetch('http://localhost:5000/getProducts');
//             const data = await res.json();
//             setProducts(data);
//         } catch (err) {
//             console.error(err);
//         }
//     };
//     useEffect(() => {
//         loadImages();
//     }, []);
//     return (
//         <div>
//             <h1 className="title">Cloudinary Gallery</h1>
//             <div className="gallery">
//                 {Products &&
//                     Products.map((Prod, index) => (
//                     <div key={index}>
//                           <h1> {Prod.name}</h1>
//                           <h2>{Prod.price}</h2>
//                           <h3>{Prod.description}</h3>
//                        <Image
//                            key={index}
//                            cloudName={"dc7suzbrg"}
//                            publicId={Prod.imageUrl}
//                            width="300"
//                            crop="scale"
//                        /> </div>
                     
//                     ))}
//             </div>
//         </div>
//     );
// }









import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-titl">Products</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog  open={open} onClose={handleClose} />
    </div>
  );
}