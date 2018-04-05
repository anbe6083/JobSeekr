import React, { Component } from 'react';
import Tree from 'react-d3-tree';

class CompanyTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTreeData: [
        {
          name: 'Company',
          children: [
            {
              name: 'John Doe',
              attributes: {
                Title: 'CEO',
                Email: 'johndoe@company.com',
                'Phone Number': '111-222-4444',
                LinkedIn: 'http://linkedin.com/fake',
                'Last Contacted': '11/2/2017'
              }
            },
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
              },
              children: [
                {
                  name: 'John Moe',
                  attributes: {
                    Title: 'Software Engineer',
                    Email: 'johnmoe@company.com',
                    'Phone Number': '111-222-4444',
                    LinkedIn: 'http://linkedin.com/fake',
                    'Last Contacted': '11/2/2017'
                  }
                },
                {
                  name: 'Jane Moe',
                  attributes: {
                    Title: 'Senior Software Engineer',
                    Email: 'janemoe@company.com',
                    'Phone Number': '111-222-4444',
                    LinkedIn: 'http://linkedin.com/fake',
                    'Last Contacted': '11/2/2017'
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div
        id="treeWrapper"
        style={{ height: '1000px', alpha: '0.5', spacing: '12' }}
      >
        <h1> Company Tree </h1>
        <Tree
          data={this.state.myTreeData}
          orientation={'vertical'}
          separation={{ siblings: 3, nonsiblings: 2 }}
          collapsible={true}
        />
      </div>
    );
  }
}

export default CompanyTree;
