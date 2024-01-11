import { UserConfigInfoModel } from '@/common/model'

const gh = 'https://github.com'

export const getGitHubOwnerURL = (userConfigInfo: UserConfigInfoModel) => {
  const { owner } = userConfigInfo
  return `${gh}/${owner}`
}

export const getImageHostingURL = (userConfigInfo: UserConfigInfoModel) => {
  const { owner, selectedRepo } = userConfigInfo
  return `${gh}/${owner}/${selectedRepo}`
}
