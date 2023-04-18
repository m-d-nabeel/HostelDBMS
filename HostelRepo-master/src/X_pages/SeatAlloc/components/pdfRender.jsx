import React, { Component } from "react";

class PDFViewer extends Component {
	render() {
		return (
			<div style={{ width: "100%", height: "100%" }}>
				<object
					data={this.props.fileUrl}
					type="application/pdf"
					style={{ width: "100%", height: "100%" }}
				>
					<embed
						src={this.props.fileUrl}
						type="application/pdf"
						style={{ width: "100%", height: "100%" }}
					/>
					Error: Cannot display PDF file.
				</object>
			</div>
		);
	}
}

export default PDFViewer;


