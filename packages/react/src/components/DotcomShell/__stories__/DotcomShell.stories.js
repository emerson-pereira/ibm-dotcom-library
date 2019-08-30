import React from 'react';
import { storiesOf } from '@storybook/react';
import DotcomShell from '../DotcomShell';
import {
  Button,
  DataTableSkeleton,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react';
import mastheadLinks from '../../Masthead/__stories__/data/MastheadLinks.js';
import '../../../../../styles/scss/components/dotcom-shell/_dotcom-shell.scss';
import 'carbon-components/scss/components/button/_button.scss';
import 'carbon-components/scss/components/data-table/_data-table.scss';
import 'carbon-components/scss/components/structured-list/_structured-list.scss';

const content = (
  <div>
    <div className="bx--row">
      <div className="bx--col-lg-8">
        <h1>Some random content</h1>
        <p style={{ paddingBottom: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div className="bx--row">
      <div className="bx--col-lg-10" style={{ paddingTop: '4rem' }}>
        <h1>Carbon structured list</h1>
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>ColumnA</StructuredListCell>
              <StructuredListCell head>ColumnB</StructuredListCell>
              <StructuredListCell head>ColumnC</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell noWrap>Row 1</StructuredListCell>
              <StructuredListCell>Row 1</StructuredListCell>
              <StructuredListCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </StructuredListCell>
            </StructuredListRow>
            <StructuredListRow>
              <StructuredListCell noWrap>Row 2</StructuredListCell>
              <StructuredListCell>Row 2</StructuredListCell>
              <StructuredListCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean
                posuere sem vel euismod dignissim. Nulla ut cursus dolor.
                Pellentesque vulputate nisl a porttitor interdum.
              </StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    </div>
    <div className="bx--row">
      <div className="bx--col-lg-5" style={{ paddingTop: '0rem' }}>
        <h1>Some info about this data table</h1>
        <p style={{ paddingBottom: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="bx--col-lg-7" style={{ paddingTop: '0rem' }}>
        <DataTableSkeleton
          headers={['Name', 'Protocol', 'Port', 'Rule', 'Attached Groups']}
          zebra={false}
          compact={false}
        />
      </div>
    </div>
    <div
      className="bx--row"
      style={{
        marginTop: '5rem',
        backgroundColor: '#f3f3f3',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        paddingRight: '2rem',
      }}>
      <div
        className="bx--col-md-2"
        style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
        <h5>Content card</h5>
        <p style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div
        className="bx--col-md-2"
        style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
        <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
          <h5>Content card</h5>
          <p style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p style={{ paddingBottom: '2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button>Click me</Button>
        </div>
      </div>
      <div
        className="bx--col-md-2"
        style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
        <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
          <h5>Content card</h5>
          <p style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p style={{ paddingBottom: '2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button>Click me</Button>
        </div>
      </div>
      <div
        className="bx--col-md-2"
        style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
        <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
          <h5>Content card</h5>
          <p style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p style={{ paddingBottom: '2rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button>Click me</Button>
        </div>
      </div>
    </div>
  </div>
);

storiesOf('Dotcom Shell', module).add('Default', () => {
  return <DotcomShell navigation={mastheadLinks} content={content} />;
});
