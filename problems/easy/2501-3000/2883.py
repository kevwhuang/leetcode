# 2883 - Drop Missing Data

import pandas as pd

def dropMissingData(students):
    students.dropna(subset="name", inplace=True)
    return students
