// Standard requires
const _ = require('lodash');
const bigNumber = require('bignumber.js');

// Library requires

// Local requires
const config = require('../../config.json');


class Utils {

        constructor() {
        }

        static loadConfig() {

                const defaultConfig = config.development;
                const environment = process.env.NODE_ENV || 'development';
                const environmentConfig = config[environment];
                this._config = _.merge(defaultConfig, environmentConfig);

                process.stdout.write("RUNNING ENVIRONMENT: ");
                const color = 'development' == environment ? '\x1b[33m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
                console.log(color, this._config.config_id);
        }

        static getConfig() {

                if (undefined == this._config) {
                        this.loadConfig();
                }
                return this._config;
        }

        static getConfigSubParameter(param, key, value) {

                return this.getConfigParameter(param).find(elem => elem[key] == value);
        }

        static getConfigParameter(param) {

                if (undefined == this._config) {
                        this.loadConfig();
                }
                return this._config[param];
        }
}

module.exports = Utils;
