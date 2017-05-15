import * as fs from 'fs'
import * as path from 'path'
import { Observable } from 'rxjs'
import { EnvProvider, ENV_FILEPATH } from '../../common'

const envData = require('../../../kio-env-browser.json')

const ROOT_DIR = path.resolve('./')

export class BrowserEnvProvider<T> extends EnvProvider<T> {

  read ():Observable<T> {
    return Observable.of(envData)
  }

}