import React from "react";

class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.files);
    for (let i = 0; i < this.state.files.length; i++) {
      console.log(this.state.files[i]);
    }
    // this.state.files.map((file) => console.log(file));
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <input
            type="file"
            multiple
            name="files"
            accept="image/*,.pdf"
            onChange={(event) => {
              this.setState({ files: event.target.files });
              console.log("onChange event");
              // only occur when choose file, not when not choose file
            }}
          />
          <button type="submit">Upload file</button>
        </form>
      </div>
    );
  }
}
export default UploadFile;
