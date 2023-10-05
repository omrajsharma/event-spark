import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
import AppAlert from '../../utility/AppAlert'


export default function Alert() {
  const appAlert = AppAlert();

  if (appAlert?.displayAlert) {
    return (
      <div className={`fixed right-4 top-4 z-50  border-l-4 p-4
        ${ appAlert?.properties?.type == "SUCCESS" ? "border-green-400 bg-green-50" : ""}
        ${ appAlert?.properties?.type == "ERROR" ? "border-red-400 bg-red-50" : ""}
        ${ appAlert?.properties?.type == "WARNING" ? "border-yellow-400 bg-yellow-50" : ""}
        ${ appAlert?.properties?.type == "INFO" ? "border-blue-400 bg-blue-50" : ""}
      `}>
        <div className="flex">
          <div className="flex-shrink-0">
            { appAlert?.properties?.type == "SUCCESS" && <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" /> }
            { appAlert?.properties?.type == "ERROR" && <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" /> }
            { appAlert?.properties?.type == "WARNING" && <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" /> }
            { appAlert?.properties?.type == "INFO" && <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" /> }
          </div>
          <div className="ml-3">
            <p className={`text-sm 
              ${ appAlert?.properties?.type == "SUCCESS" ? "text-green-700" : ""}
              ${ appAlert?.properties?.type == "ERROR" ? "text-red-700" : ""}
              ${ appAlert?.properties?.type == "WARNING" ? "text-yellow-700" : ""}
              ${ appAlert?.properties?.type == "INFO" ? "text-blue-700" : ""}
            `}>
              {appAlert?.properties?.message}
              {/* <a href="#" className="font-medium text-yellow-700 underline hover:text-yellow-600">
                Upgrade your account to add more credits.
              </a> */}
            </p>
          </div>
        </div>
      </div>
    )
  }
}