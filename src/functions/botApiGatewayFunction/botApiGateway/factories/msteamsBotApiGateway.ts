import BaseApiGateway from '../baseBotApiGateway'
import { ChatPlatformEType } from '../../../../lib/enum'
import { ObjectType } from '../../../../lib/type'


class MSTeamsApiGateway extends BaseApiGateway {
  protected platform: ChatPlatformEType

  constructor() {
    super(ChatPlatformEType.MSTEAMS)
  }

  public async processEvent(request: any): Promise<ObjectType | string> {
    return {}
  }

  public validateRequest(request: any): boolean {
    return true
  }
  
  public shouldProcessRequest(request: any): boolean {
    return true
  }
}

export default MSTeamsApiGateway