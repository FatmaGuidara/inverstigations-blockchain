import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 text-center something">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              {/* Popup button */}
              <div className="box">
                <a className="button" href="#popup1" onclick="event.preventDefault()">Add a new Document</a>
              </div>

              <div id="popup1" class="overlay">
                <div className="popup">
                  <a className="close" href="#">&times;</a>
                  <div className="card mb-3 mx-auto bg-dark upload-form" style={{ maxWidth: '600px' }}>
                  <h2 className="text-white text-monospace bg-dark upload-text"><b>Upload your document</b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="Choose your file..."
                            required />
                      </div>
                    <input accept=".doc,.docx,.pdf" type="file" onChange={this.props.captureFile} className="text-white text-monospace select-file"/>
                    <button type="submit" className="btn btn-outline-secondary btn-block"><b>Upload</b></button>
                  </form>
              </div>
                </div>
              </div>
              
              <div class="container">
              <p>&nbsp;</p>
              <table class="table">
                  <thead className="thead-light">
                    <tr>
                    <th scope="col" style={{ width: '10px'}}>id</th>
                    <th scope="col" style={{ width: '200px'}}>name</th>
                    <th scope="col" style={{ width: '230px'}}>description</th>
                    <th scope="col" style={{ width: '120px'}}>type</th>
                    <th scope="col" style={{ width: '90px'}}>size</th>
                    <th scope="col" style={{ width: '400px'}}>date</th>
                    <th scope="col" style={{ width: '120px'}}>uploader/view</th>
                    <th scope="col" style={{ width: '120px'}}>hash/view/get</th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    <tr>
                        <td>546zcd46c4dc</td>
                        <td>doc1.pdf</td>
                        <td>case4696</td>
                        <td>application/pdf</td>
                        <td>2 MB</td>
                        <td>14:20:03 12/27/2022</td>
                        <td>0x0e4fz6e4...</td>
                        <td>0x0e4fz6e4...</td>
                      </tr>
                  </tbody> */}
                { this.props.files.map((file, key) => {
                  return(
                    <tbody style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  )
                })}
                </table>
              </div>

              {/* <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '10px'}}>id</th>
                    <th scope="col" style={{ width: '200px'}}>name</th>
                    <th scope="col" style={{ width: '230px'}}>description</th>
                    <th scope="col" style={{ width: '120px'}}>type</th>
                    <th scope="col" style={{ width: '90px'}}>size</th>
                    <th scope="col" style={{ width: '90px'}}>date</th>
                    <th scope="col" style={{ width: '120px'}}>uploader/view</th>
                    <th scope="col" style={{ width: '120px'}}>hash/view/get</th>
                  </tr>
                </thead>
                <thead style={{ 'fontSize': '12px' }}>
                      <tr>
                        <td>546zcd46c4dc</td>
                        <td>doc1.pdf</td>
                        <td>case4696</td>
                        <td>application/pdf</td>
                        <td>2 MB</td>
                        <td>h:mm:ss A M/D/Y</td>
                        <td>
                          0x0e4fz6e4...
                         </td>
                        <td>
                          0x0e4fz6e4...
                        </td>
                      </tr>
                    </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table> */}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;