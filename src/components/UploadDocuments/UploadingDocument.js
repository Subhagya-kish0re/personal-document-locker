import React, { useState } from 'react';
import "../UploadDocuments/Style.css";
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai';



const UploadingDocument = () => {
    const [image, setImage] = useState(null)
    const [fileName,setFileName]=useState("No selected file")
    return (<>
        
      
        <div className='uploadbody'>
          <div>
                <main>
                    <h3 className='headin-upload'>Upload Document (only jpeg) </h3>
                    <div className='upload-box'>
              <form className='uploadform' action='' onClick={()=>document.querySelector(".input-field").click()}>
                  <input type="file" accept='pdf/*' className='input-field' hidden
                      onChange={({ target: { files } }) => {
                          files[0] && setFileName(files[0].name)
                          if (files) {
                              setImage(URL.createObjectURL(files[0]))
                          }
                      } }
                  />
                  {image ?
                      // eslint-disable-next-line jsx-a11y/alt-text
                      <img src={image} width={150} height={150} />
                      :
                      <>
                          <MdCloudUpload color='#1475cf' size={60} />
                          <p>Browse files to Upload</p>
                          </>
                  }
              </form>
              <section className='uploaded-row'>
                  <AiFillFileImage color='#1475cf' />
                  <span className='upload-content'>
                      {fileName} -
                      <MdDelete
                          onClick={() => {
                              setFileName("No selected File")
                              setImage(null)
                          }}
                      />
                  </span>
                  
                        </section>
                        </div>
                </main>
                </div>
        </div>
        </>
  )
}

export default UploadingDocument