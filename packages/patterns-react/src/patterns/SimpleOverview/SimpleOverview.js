/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ArrowRight20 } from '@carbon/icons-react';
import { DDS_SIMPLE_OVERVIEW } from '../../internal/FeatureFlags';
import { LinkWithIcon } from '@carbon/ibmdotcom-react';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings as ddsSettings } from '@carbon/ibmdotcom-utilities';
import { featureFlag } from '@carbon/ibmdotcom-utilities';
import { settings } from 'carbon-components';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * Simple Overview
 *
 * @param {object} props Props object
 * @param {string} props.label Label for the Simple Overview Pattern
 * @param {string} props.heading Heading for the Simple Overview Pattern
 * @param {string} props.copy Copy for the Simple Overview Pattern
 * @param {object} props.link  Link object {href, target, copy}
 * @returns {*} Simple Overview Pattern JSX object
 */
const SimpleOverview = ({ label, heading, copy, link }) => {
  /**
   * Renders the link based on the props
   *
   * @param {object} link Link object
   * @returns {*} link div JSX object
   */
  const _renderLink = link => {
    if (link) {
      return (
        <div className={`${prefix}--simpleoverview__link-container`}>
          <LinkWithIcon href={link.href} target={link.target}>
            <span>{link.copy}</span> <ArrowRight20 />
          </LinkWithIcon>
        </div>
      );
    }
    return false;
  };

  return featureFlag(
    DDS_SIMPLE_OVERVIEW,
    <section
      data-autoid={`${stablePrefix}--simpleoverview`}
      className={`${prefix}--simpleoverview`}>
      <div className={`${prefix}--simpleoverview__container`}>
        <div className={`${prefix}--simpleoverview__row`}>
          <div
            className={classNames(
              `${prefix}--simpleoverview__col`,
              `${prefix}--simpleoverview__label-container`
            )}>
            <h3 className={`${prefix}--simpleoverview__label`}>{label}</h3>
          </div>
          <div
            className={classNames(
              `${prefix}--simpleoverview__col`,
              `${prefix}--simpleoverview__content-container`
            )}>
            <h4 className={`${prefix}--simpleoverview__heading`}>{heading}</h4>
            <p className={`${prefix}--simpleoverview__content`}>{copy}</p>
            {_renderLink(link)}
          </div>
        </div>
      </div>
    </section>
  );
};

SimpleOverview.propTypes = {
  label: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string,
    target: PropTypes.string,
    copy: PropTypes.string,
  }),
};

export default SimpleOverview;
