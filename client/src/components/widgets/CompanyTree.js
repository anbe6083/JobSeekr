import React, { Component } from 'react';
import Tree from 'react-d3-tree';

class CompanyTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTreeData: [
        {
          name: 'John Doe',
          attributes: {
            Title: 'CEO',
            Email: 'johndoe@company.com',
            'Phone Number': '111-222-3333',
            LinkedIn: 'http://linkedin.com/fake',
            'Last Contacted': '11/2/2017'
          },
          children: [
            {
              name: 'Jane Doe',
              attributes: {
                Title: 'CFO',
                Email: 'janedoe@company.com',
                'Phone Number': '111-222-4444',
                LinkedIn: 'http://linkedin.com/fake',
                'Last Contacted': '11/2/2017'
              }
            },
            {
              name: 'Joe Schmo',
              attributes: {
                Title: 'CTO',
                Email: 'joeschmo@company.com',
                'Phone Number': '111-222-4444',
                LinkedIn: 'http://linkedin.com/fake',
                'Last Contacted': '12/22/2017'
              }
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
        <Tree data={this.state.myTreeData} orientation={'vertical'} />
      </div>
    );
  }
}

export default CompanyTree;
