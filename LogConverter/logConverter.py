import socketio
import eventlet
import uuid
import csv

sio = socketio.Server()
app = socketio.WSGIApp(sio, static_files={})

@sio.on('connect')
def connect(sid, environ):
    print("Client Connected!")

@sio.on('generateCSV')
def convertToCSV(sid, data): #Need to add error handling
    fileName = str(uuid.uuid1()) + ".csv"
    with open(fileName, 'w', newline='') as file:
        fieldNames = ['Interval']
        print(data)
        for sensorName in data[0]["data"]:                  # Create the CSV headers
            fieldNames.append(sensorName)
        writer = csv.writer(file)                           # Write the headers
        writer.writerow(fieldNames)
        for dataset in data:                                # Create row entires
            dataRow = [dataset["utc"]]
            for sensorData in dataset["data"]:
                dataRow.append(dataset["data"][sensorData]) 
            writer.writerow(dataRow)                        # Write the row entries
        file.close()
    sio.emit('data', fileName)
    
@sio.on('disconnect')
def disconnect(sid):
    print("Client disconnected!")

# Start the server
if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('127.0.0.1', 5000)), app)