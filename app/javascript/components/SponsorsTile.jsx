import React from 'react';
import PropTypes from 'prop-types';

import 'stylesheets/sponsors-tile';

const SponsorsTile = ({ sponsors }) => (
    <div className="sponsors-tile">
        <div className="sponsors-tile-title">Sponsored by</div>
        <div className="sponsors-tile-img-container">
            {sponsors.map((sponsor) => (
                <div key={sponsor.id}>
                    <img src={sponsor.tile_image} alt={sponsor.tile_image_alt} />
                </div>
            ))}
        </div>
    </div>
);

SponsorsTile.propTypes = {
    sponsors: PropTypes.array,
};

export default SponsorsTile;