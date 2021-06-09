import React, { Component } from 'react';
import _ from 'lodash';

import { buildGETAxios } from '../services/BaseService';
import Spinner from '../components/Spinner/Spinner';

import LeagueTable from './components/LeagueTable';
import AverageTable from './components/AverageTable';
import ProfileTable from './components/ProfileTable';

import styles from './HomePage.module.scss';

const BASE_URL = 'https://api.scoreverify.com/usbc/';
const WINDOW_OPTIONS = ['all', 'day', 'week', 'month', 'year'];
const SORT_OPTIONS = ['time', 'viral', 'top'];

export default class HomePage extends Component {
  state = {
    data: null,
    errorMessage: null,
    query: '5495-24744',
    sortOption: SORT_OPTIONS[0],
    windowOption: WINDOW_OPTIONS[0],
  };

  handleOnInputChange = (e) => {
    e.preventDefault();
    const query = e.target.value;
    this.setState({ query });
  }

  handleSearch = () => {
    this.setState({ requesting: true }, () => {
      buildGETAxios(`${BASE_URL}/5495-24744/json`).then((result) => {
        const data = _.get(result, 'data');
        if (!_.isEmpty(data)) {
          this.setState({ data, requesting: false, errorMessage: null});
        } else {
          this.setState({ errorMessage: 'Nothing was found. Try another search?', data: null, requesting: false });
        }
      }).catch((errorMessage) => {
        this.setState({ requesting: false, errorMessage });
      });
    })
  }

  renderAverageTable() {
    const { data, errorMessage, requesting } = this.state;

    const averages = _.get(data, 'Averages', null);
    if (requesting) {
      return (
        <Spinner />
      )
    }

    if (!_.isNil(averages)) {
      return (
        <AverageTable
          averages={averages}
        />
      )
    }

    return null;
  }

  renderLeagueTable() {
    const { data, errorMessage, requesting } = this.state;

    const leagues = _.get(data, 'Leagues', null);
    if (requesting) {
      return (
        <Spinner />
      )
    }

    if (!_.isNil(leagues)) {
      return (
        <LeagueTable
          leagues={leagues}
        />
      )
    }

    return null;
  }

  renderProfile() {
    const { data, errorMessage, requesting } = this.state;

    const profile = _.get(data, 'ID', null);
    if (requesting) {
      return (
        <Spinner />
      )
    }

    if (!_.isNil(profile)) {
      return (
        <ProfileTable
          profile={profile}
        />
      )
    }

    return null;
  }

  render() {
    const { pageNumber } = this.state;

    return (
      <div className={styles.pageContainer}>
        <h3 className={styles.centerText}>Bowling User Score Search</h3>
        <div className={styles.inputContainer}>
          <div>
            <input
              type="search"
              onChange={this.handleOnInputChange}
              className={styles.searchInput}
              placeHolder='Search...'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  this.handleSearch();
                }
              }}
            />
            <input type="submit" value="Search" onClick={this.handleSearch} />
          </div>
        </div>
        <div className={styles.resultContainer}>
          {this.renderProfile()}
          <br />
          {this.renderAverageTable()}
          <br />
          {this.renderLeagueTable()}
        </div>
      </div>
    )
  }
}
