def get_users(collection):
    peopleList = []
    for people in collection.find({}):
        peopleList.append(people["userName"])
    return {'peopleList': peopleList}
 