/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import Collapse, { Panel } from 'rc-collapse';
import motion from './_util/motionUtil';
import CollapseHeader from './collapse-header';
import CollapseBody from './collapse-body';
import './collapse.css';

const Collapsible = ({ items }) => {
  const [activeKey, setActiveKey] = useState(1);

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  };

  return (
    <Collapse
      collapsible={undefined}
      accordion={true}
      activeKey={activeKey}
      onChange={onChange}
      openMotion={motion}
      sx={styles.collapse}
    >
      {items.map((item) => (
        <Panel
          key={item.id}
          sx={styles.item}
          showArrow={false}
          header={<CollapseHeader title={item.title} as="h3" />}
        >
          <CollapseBody text={item.contents} />
        </Panel>
      ))}
    </Collapse>
  );
};

export default Collapsible;

const styles = {
  collapse: {
    display: 'grid',
    gap: '12px',
  },
  item: {
    backgroundColor: '#F6F8FB',
    borderRadius: 10,
    p: [
      '20px 30px',
      '20px 30px',
      '30px 45px',
      '20px 25px 20px',
      '30px 45px',
      '20px 35px',
    ],
    '&.rc-collapse-item-active': {
      backgroundColor: '#fff',
      boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      '.rc-collapse-header': {
        svg: {
          display: 'none',
        },
      },
    },
    '.rc-collapse-header': {
      outline: 0,
    },
  },
};
