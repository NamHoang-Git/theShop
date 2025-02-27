export async function getDeletedData(models) {
    const queries = models.flatMap((model) => [
      model.findWithDeleted({ deleted: true }),
      model.countDocumentsWithDeleted({ deleted: true }),
    ]);
  
    const results = await Promise.all(queries);
    let index = 0;
    const data = {};
  
    models.forEach((model) => {
      data[model.modelName] = {
        records: results[index],
        deletedCount: results[index + 1],
      };
      index += 2;
    });
  
    return data;
  }
  