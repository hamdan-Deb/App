import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ScreenWrapper from '../components/ScreenWrapper';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import Navigation from '../libs/Navigation/Navigation';
import useLocalize from '../hooks/useLocalize';
import DistanceRequest from '../components/DistanceRequest';
import reportPropTypes from './reportPropTypes';
import * as IOU from '../libs/actions/IOU';
import * as TransactionUtils from '../libs/TransactionUtils';

const propTypes = {
    /** The transactionID we're currently editing */
    transactionID: PropTypes.string.isRequired,

    /** The report to with which the distance request is associated */
    report: reportPropTypes.isRequired,
};

function EditRequestDistancePage({transactionID, report}) {

    useEffect(() => {
        IOU.setDistanceRequestTransactionID(transactionID);
    }, []);

    const transaction = TransactionUtils.getTransaction(transactionID);
    const {translate} = useLocalize();
    return (
        <ScreenWrapper
            includeSafeAreaPaddingBottom={false}
            shouldEnableMaxHeight
        >
            <HeaderWithBackButton
                title={translate('common.distance')}
                onBackButtonPress={() => Navigation.goBack()}
            />
            <DistanceRequest
                report={report}
                transaction={transaction}
                isEditingRequest
                onSubmit={(waypoints) => {
                    IOU.editDistanceRequest(transactionID, report.reportID, {waypoints});
                    Navigation.dismissModal();
                }}
            />
        </ScreenWrapper>
    );
}

EditRequestDistancePage.propTypes = propTypes;
EditRequestDistancePage.displayName = 'EditRequestDistancePage';
export default EditRequestDistancePage;
