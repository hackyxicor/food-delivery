import React from 'react';
import { FlatList } from '../../UIComponents';
import GenericListingPlaceholder from './genericListing.placeholder';

const GenericListing = ({ loading, data, renderComponent }) => (
    <GenericListingPlaceholder
        loading={loading}
        onLoadComponent={() => (
            <FlatList
                data={data}
                renderItem={renderComponent}
            />
        )}
    />
)

export default GenericListing;