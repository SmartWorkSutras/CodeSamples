import React, { Component, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { RowDetailState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
	TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';
import { Progress, Row, Col } from 'rsuite';
//import { Table } from 'rsuite';
import { generateRows } from '../sampledata/generator';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const { Column, HeaderCell, Cell, Pagination } = Table;

const { Line } = Progress;

// const [opendialog, setOpen] = useState(false);

// const handleClickOpen = () => {
//   setOpen(true);
// };
// const handleClose = () => {
//   setOpen(false);
// };
    
const RowDetail = ({ row }) => (
  
  <div>
    <Row vertial-align="top">
      <div>
      <Col md={2}><Link component="button" variant="body2" size="lg" onClick="">Panel 1</Link></Col>
      <Col md={14}><Line percent={30} status='active'/></Col>
      </div>
    </Row>
    <Row vertial-align="top">
    <Col md={2}><Link component="button" variant="body2"  onClick="">Panel 2</Link></Col>
      <Col md={14}><Line percent={50} status='fail' /></Col>
    </Row>
    <Row vertial-align="top">
    <Col md={2}><Link component="button" variant="body2"  onClick="">Panel 3</Link></Col>
      <Col md={14}><Line percent={100} status='success' /></Col>
    </Row>
    <Row vertial-align="top">
    <Col md={2}><Link component="button" variant="body2"  onClick="">Panel 4</Link></Col>
      <Col md={14}><Line percent={10} strokeColor="#ffc107" /></Col>
    </Row>

    {/* <Dialog open={opendialog} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog> */}
  </div>
);

export const Counter = () =>{
  // static displayName = Counter.name;

  // constructor(props) {
  //   super(props);
  //   this.state = { currentCount: 0 };
  //   this.incrementCounter = this.incrementCounter.bind(this);
  // }

  // incrementCounter() {
  //   this.setState({
  //     currentCount: this.state.currentCount + 1
  //   });
  // }

  // render() {
    
    let [columns] = useState([
      { name: 'name', title: 'Project Code' },
      { name: 'project', title: 'Name' },
      { name: 'panelscount', title: 'No. of Panels' },
      { name: 'status', title: 'Status' }, 
      // { name: 'name', title: 'Name' },
      // { name: 'gender', title: 'Gender' },
      // { name: 'city', title: 'City' },
      // { name: 'car', title: 'Car' },
      // { name: 'projectcode', title: 'Project Code' },
      // { name: 'projectname', title: 'Project Name' },
      // { name: 'panelsno', title: 'No. of Panels' },
      // { name: 'status', title: 'Status' },
      // { name: 'perccomplete', title: 'Percentage Completion' },
    ]);
    let [rows] = useState(generateRows({ length: 3 }));

    return (
      <div>
        <h3>Projects</h3>

        {/* <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button> */}
        <Paper>
          <Grid
            rows={rows}
            columns={columns}>
            <RowDetailState
              // defaultExpandedRowIds={[2, 5]}
            />
            <Table />
            <TableHeaderRow />
            <TableRowDetail
              contentComponent={RowDetail}
            />
          </Grid>
        </Paper>
      </div>
    );
  }
//}
